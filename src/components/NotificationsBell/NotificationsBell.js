import React, {useState} from 'react';
import {Badge, IconButton, Tooltip} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import BasicMenu from "../common/BasicMenu/BasicMenu";


const NotificationsBell = ({iconColor, badgeContent}) => {
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const HandleOpen = (event) => {
        setAnchorEl(event.currentTarget)
        setOpen(true);
    };
    const HandleClose = () => {
        setAnchorEl(null)
        setOpen(false);
    };

    const newNotifications = `You have ${badgeContent} new notifications!`
    const noNotifications = 'No new notifications'
    const notifications = [
        {
            id: 0,
            label: 'First notification',
        },
        {
            id: 2,
            label: 'Second notification',
        },
    ]
    return (
        <div>
            <Tooltip title={notifications.length ? newNotifications : noNotifications}>
                <IconButton
                    color={iconColor}
                    onClick={notifications.length ? HandleOpen : null}
                >
                    <Badge
                        badgeContent={notifications.length}
                        color="error"
                    >
                        <NotificationsIcon color={iconColor}/>
                    </Badge>
                </IconButton>
            </Tooltip>
            <BasicMenu
                open={open}
                anchorEl={anchorEl}
                handleClose={HandleClose}
                menuItems={notifications}
            />
        </div>
    );
};

export default NotificationsBell;