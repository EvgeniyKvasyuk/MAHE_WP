import { ReactComponent as ArrowRightIcon } from '@assets/arrow_right.svg';
import { ReactComponent as ChevronDownIcon } from '@assets/chevron_down.svg';
import { ReactComponent as MedicalClipBoardIcon } from '@assets/medicalclipboard.svg';
import { ReactComponent as MessageIcon } from '@assets/message.svg';
import { ReactComponent as MicroScopeIcon } from '@assets/microscope.svg';
import { ReactComponent as PhoneIcon } from '@assets/phone.svg';
import { ReactComponent as RefillIcon } from '@assets/refill.svg';
import { ReactComponent as ScheduleIcon } from '@assets/schedule.svg';
import { ReactComponent as TrophyIcon } from '@assets/trophy.svg';

export const ICONS = {
  arrowRight: ArrowRightIcon,
  medicalBoard: MedicalClipBoardIcon,
  message: MessageIcon,
  microScope: MicroScopeIcon,
  refill: RefillIcon,
  schedule: ScheduleIcon,
  trophy: TrophyIcon,
  phone: PhoneIcon,
  chevron_down: ChevronDownIcon,
} as const;
