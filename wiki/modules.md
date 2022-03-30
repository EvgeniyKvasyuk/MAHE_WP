# Modules or feature sliced approaches

The modules folder contains the business logic of the application. All files in this folder are divided into modules.

A module is an isolated part of an application that is responsible for an isolated part of the application's functionality.
Usually a module is a section of a site, or a very complex page on a site, or a very complex form on a site, or a reusable widget.

## How to work with modules?

- Modules can contain nested modules.
- It is highly recommended to keep the nesting level low and only nest modules if the number of components in a module is really very large (for example, more than 30 components). In the case of deep nesting, you should think about moving submodules as independent ones to the top level.
- It is preferable to use files from the module itself and from the common folder in the module.
- When a module uses files from its own module, use relative paths to import files. To import files from the common folder, you must use absolute paths. Using files from neighboring modules is not recommended, but it is acceptable. With such an import, it is necessary to prevent the appearance of cyclic dependencies.
- Files with component tests must be located directly next to the component file and have the same name with the extension `\*.test.ts(x?)`
- It is recommended to keep the file structure as flat as possible, avoid folders with one or two files.

## Structure of module

| File or folder name         | Content                                                                                               |
|-----------------------------|-------------------------------------------------------------------------------------------------------|
| 📁assets                    | static files used in module - icons, fonts, other files                                               |
| 📁components                | child react-components used in modules                                                                |
| 📁constants or constants.ts | files with constants used in module                                                                   |
| 📁helpers or helpers.ts     | additional logic                                                                                      |
| 📁hooks                     | React hooks                                                                                           |
| 📁modules                   | Included modules has the same structure as parent module                                              |
| 📁redux                     | Files which are connected with redux - action creators, reducers, selectors                           |
| 📁types или types.ts        | Types for typescript                                                                                  |
| locale.ts                   | File which includes some text info which is used in module                                            |
| Module.tsx                  | Main module component, it has the same name as module. It is exported outside using index.ts          |
| index.ts                    | All entities of modules that have to be used outside of the module have to be exported with this file |
| README.md                   | Description of module in markdown format                                                              |

## Naming rules

Module submodule files must not contain a prefix with the name of the parent module in their names. If the submodule is going to be used outside of the component, you should add a prefix when exporting. Fulfillment of this requirement is recommended, but remains at the discretion of the developer.

For example, if in the module below:

```
src/modules/MyModule/
  components/
    Componets.ts
  index.ts
  MyModule.ts
```

needs to use `SubModule.ts` outside of `MyModule`, then the contents of `index.ts` will be:

```
export { MyModule } from './MyModule';
export { SubModule as MyModuleSubModule } from './components/SubModule';
```

When creating submodules, it's good to practice adding `displayName` with the module prefix to make `devTools` easier to navigate.

For example, in the `CardsList/components/Item.ts` submodule, add `Item.displayName = 'CardsListItem';`.

## Rules of exports and imports within and from this module.

All exports outside of subdirectories go only through the "interface" index.ts. Export explicitly, try to avoid
exports like `export * from './some/route'`.

All entities that need to be exported from the module are exported via the root `index.ts`. The presence of any code except for imports and exports is not allowed in `index.ts` (exceptions are negotiated separately).
The modular structure assumes the refusal to use exports by default (export default).

If an entity of a certain kind exists in multiple instances, then a subdirectory and file `index.ts` are created. If entity
exists in a single instance (for example, types.ts), the subdirectory and file `index.ts` are not created.

Imports from the module of those entities that are not exported in the root `index.ts` of the module are prohibited. Import from a module assumes the form `import { functionFromMyModule} from '@module/MyModule'`. Imports like `import { functionFromMyModule} from '@module/MyModule/utils/funtionFromMyModule';` **forbidden**, except in cases of unresolvable circular dependencies.

## Module-component

If the module is a component, the folder is named via `CamelCase`, and its root must contain the component file of the same name.

## Usual module

If a module does not contain a root component (though it can contain components in submodules), then the module folder is named via `camelCase`:

## Work with data

Work with data requests should be implemented in each module separately.
To work with data, it is recommended to create a service in each module that encapsulates work with the backend.
Components must interact with this service via redux actions and stores.
