// src/Components/Icon/Icons.js
import { faBars, faBell, faCog, faGear, faQuestion, faRightFromBracket, faUser, faMagnifyingGlass, faCamera, faVideo, faNoteSticky} from '@fortawesome/free-solid-svg-icons';
import Icon from './Icon';

export const BellIcon = (props) => <Icon icon={faBell} {...props} />;
export const CogIcon = (props) => <Icon icon={faCog} {...props} />;
export const UserIcon = (props) => <Icon icon={faUser} {...props} />;
export const GearIcon = (props) => <Icon icon={faGear} {...props} />;
export const BarsIcon = (props) => <Icon icon={faBars} {...props} />;
export const SignOutIcon = (props) => <Icon icon={faRightFromBracket} {...props} />;
export const QuestionIcon = (props) => <Icon icon={faQuestion} {...props} />;
export const SearchIcon = (props) => <Icon icon={faMagnifyingGlass} {...props} />;
export const CameraIcon = (props) => <Icon icon={faCamera} {...props} />;
export const VideoIcon = (props) => <Icon icon={faVideo} {...props} />;
export const StickerIcon = (props) => <Icon icon={faNoteSticky} {...props} />;
