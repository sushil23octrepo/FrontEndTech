import './App.css';
import { MuiAccordian } from './components/MuiAccordian';
import { MuiAlert } from './components/MuiAlert';
import { MuiAutocomplete } from './components/MuiAutocomplete';
import { MuiAvatar } from './components/MuiAvatar';
import { MuiBadge } from './components/MuiBadge';
import { MuiBottomNavigation } from './components/MuiBottomNavigation';
import { MuiBox } from './components/MuiBox';
import { MuiBreadcrubs } from './components/MuiBreadcrubs';
import { MuiButton } from './components/MuiButton';
import { MuiCard } from './components/MuiCard';
import { MuiCheckbox } from './components/MuiCheckbox';
import { MuiChip } from './components/MuiChip';
import { MuiDialog } from './components/MuiDialog';
import { MuiDrawer } from './components/MuiDrawer';
import { MuiGrid } from './components/MuiGrid';
import { MuiImageList } from './components/MuiImageList';
import { MuiLink } from './components/MuiLink';
import { MuiList } from './components/MuiList';
import { MuiLoadingButton } from './components/MuiLoadingButton';
import { MuiMenu } from './components/MuiMenu';
import { MuiNavbar } from './components/MuiNavbar';
import { MuiProgress } from './components/MuiProgress';
import { MuiRadioButton } from './components/MuiRadioButton';
import { MuiRating } from './components/MuiRating';
import { MuiSelect } from './components/MuiSelect';
import { MuiSkeleton } from './components/MuiSkeleton';
import { MuiSnackBar } from './components/MuiSnackBar';
import { MuiSwitch } from './components/MuiSwitch';
import { MuiTable } from './components/MuiTable';
import { MuiTextBox } from './components/MuiTextBox';
import { MuiTooltip } from './components/MuiTooltip';
import { MuiTypography } from './components/MuiTypography';
import {LocalizationProvider} from "@mui/lab"
import AdapterDateFns from "@mui/lab/AdapterDateFns"
import { MuiPicker } from './components/MuiPicker';
import { MuiDateRangePicker } from './components/MuiDateRangePicker';
import { MuiTab } from './components/MuiTab';
import { MuiTimeline } from './components/MuiTimeline';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <div className="App">
      {/* <MuiTypography/> */}
      {/* <MuiButton/> */}
      {/* <MuiTextBox></MuiTextBox> */}
      {/* <MuiSelect/> */}
      {/* <MuiRadioButton/> */}
      {/* <MuiCheckbox/> */}
      {/* <MuiSwitch/> */}
      {/* <MuiRating/> */}
      {/* <MuiAutocomplete/> */}
      {/* <MuiBox/> */}
      {/* <MuiGrid/> */}
      {/* <MuiCard/> */}
      {/* <MuiAccordian/> */}
      {/* <MuiImageList/> */}
      {/* <MuiNavbar/> */}
      {/* <MuiMenu/> */}
      {/* <MuiLink/> */}
      {/* <MuiBreadcrubs/> */}
      {/* <MuiDrawer/> */}
      {/* <MuiBottomNavigation/> */}
      {/* <MuiAvatar/> */}
      {/* <MuiList /> */}
      {/* <MuiChip/> */}
      {/* <MuiTooltip/> */}
      {/* <MuiTable/> */}
      {/* <MuiAlert/> */}
      {/* <MuiSnackBar/> */}
      {/* <MuiDialog/> */}
      {/* <MuiProgress/> */}
      {/* <MuiSkeleton/> */}
      {/* <MuiLoadingButton/> */}
      {/* <MuiPicker/> */}
      {/* <MuiDateRangePicker/> */}
      {/* <MuiTab/> */}
      <MuiTimeline/>
    </div>
    </LocalizationProvider>
  );
}

export default App;
