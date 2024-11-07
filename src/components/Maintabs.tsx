import React, { useState } from "react";
  import AccountCircleIcon from '@mui/icons-material/AccountCircle';
  import Tabs from '@mui/material/Tabs';
  import Tab from '@mui/material/Tab';
  import Box from '@mui/material/Box';
  import Drawer from '@mui/material/Drawer';
  import IconButton from '@mui/material/IconButton';
  import MenuIcon from '@mui/icons-material/Menu';
  import CloseIcon from '@mui/icons-material/Close';
  import { Typography, Divider, useMediaQuery } from '@mui/material';
  import { useTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import DescriptionIcon from '@mui/icons-material/Description';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import GroupIcon from '@mui/icons-material/Group';
import MapIcon from '@mui/icons-material/Map';
import AssessmentIcon from '@mui/icons-material/Assessment';

import Dashboard from './Dashboard';
import Timetracking from './TimeTracking';
import TaskList from './TaskList';
import LeadPipeline from './LeadPipeline';
import Estimates from './Estimates';
import Invoices from './Invoices';
import Projects from './Projects';
import Schedules from './Schedules';
import PhotosAndFiles from './PhotosAndFiles';
import Customers from './Customers';
import MapComponent from './Map';
import Reports from './Reports';

const mainTabs = [
  { label: 'Dashboard', icon: <DashboardIcon />, component: <Dashboard /> },
  { label: 'Timetracking', icon: <AccessTimeIcon />, component: <Timetracking /> },
  { label: 'Task List', icon: <ListAltIcon />, component: <TaskList /> },
  { label: 'Lead Pipeline', icon: <LeaderboardIcon />, component: <LeadPipeline /> },
  { label: 'Estimates', icon: <MonetizationOnIcon />, component: <Estimates /> },
  { label: 'Invoices', icon: <DescriptionIcon />, component: <Invoices /> },
  { label: 'Projects', icon: <AssignmentIcon />, component: <Projects /> },
  { label: 'Schedules', icon: <CalendarTodayIcon />, component: <Schedules /> },
  { label: 'Photos & Files', icon: <PhotoLibraryIcon />, component: <PhotosAndFiles /> },
  { label: 'Customers', icon: <GroupIcon />, component: <Customers /> },
  { label: 'Map', icon: <MapIcon />, component: <MapComponent /> },
  { label: 'Reports', icon: <AssessmentIcon />, component: <Reports /> },
];

function MainLayout() {
  const [value, setValue] = useState(0);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
      if (isMobile) {
          setDrawerOpen(false); 
      }
  };

  const toggleDrawer = () => {
      setDrawerOpen(!isDrawerOpen);
  };

 
  
  return (
    <Box sx={{ display: 'flex', backgroundColor: '#FFFFFF', padding: 2, boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        {isMobile ? (
            <>
                <IconButton onClick={toggleDrawer}>
                    <MenuIcon />
                </IconButton>
                <Drawer
                    anchor="left"
                    open={isDrawerOpen}
                    onClose={toggleDrawer} 
                >
                    <Box sx={{ width: 250, padding: 2 }}>
                        <IconButton onClick={toggleDrawer} sx={{ alignSelf: 'flex-end' }}>
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h4">Construction</Typography>
                        <Typography variant="h6">Service</Typography>
                        <Divider />
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            orientation="vertical"
                            TabIndicatorProps={{
                                sx: {
                                    display: 'none',
                                },
                            }}
                            sx={{ borderRight: 1, borderColor: 'divider', minWidth: 200 }}
                        >
                            {mainTabs.map((tab, index) => (
                                <Tab
                                    key={index}
                                    icon={tab.icon}
                                    iconPosition="start"
                                    label={tab.label}
                                    sx={{
                                        fontWeight: value === index ? 'bold' : 'normal',
                                        borderBottom: value === index ? '2px solid black' : 'none',
                                        textTransform: 'none',
                                        paddingBottom: '8px',
                                    }}
                                />
                            ))}
                        </Tabs>
                        <Divider />
                        <Typography variant="h6">Jacob Jones</Typography>
                <Typography variant="h6">8:25 AM</Typography>
                    </Box>
                </Drawer>
            </>
        ) : (
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <Typography variant="h4">Construction</Typography>
                <Typography variant="h6">Service</Typography>
                <Divider />
                <Tabs
                    value={value}
                    onChange={handleChange}
                    orientation="vertical"
                    TabIndicatorProps={{
                        sx: {
                            display: 'none',
                        },
                    }}
                    sx={{ borderRight: 1, borderColor: 'divider', minWidth: 200 }}
                >
                    {mainTabs.map((tab, index) => (
                        <Tab
                            key={index}
                            icon={tab.icon}
                            iconPosition="start"
                            label={tab.label}
                            sx={{
                                fontWeight: value === index ? 'bold' : 'normal',
                                borderBottom: value === index ? '2px solid black' : 'none',
                                textTransform: 'none',
                                paddingBottom: '8px',
                            }}
                        />
                    ))}
                </Tabs>
                <Divider />
                <Typography variant="h6">Jacob Jones</Typography>
                <Typography variant="h6">8:25 AM</Typography>
            </Box>
        )}
        {/* Content Section */}
        <Box sx={{ flexGrow: 1, padding: 2, marginLeft: isMobile ? 0 : 2 }}>
            {mainTabs[value].component}
        </Box>
    </Box>
);
}

  
  
  
  export default MainLayout;
