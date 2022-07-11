import React from 'react';
import CommonButton from "../CommonButton/CommonButton";
import NotificationsBell from "../../NotificationsBell/NotificationsBell";
import Avatar from "@mui/material/Avatar";
import {Box, IconButton, Tooltip, Typography} from "@mui/material";
import HelpIcon from '@mui/icons-material/Help';

const Header = ({title}) => {
        const headerStyles = {
            wrapper: {
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#009be5',
                padding: '20px',
            },
            topRow: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'end',
                alignItems: 'center',
                marginBottom: '20px',
                '*': {
                    marginRight: '5px',
                },

            },
            middleRow: {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '20px',
                marginLeft: '256px',
            },
            link: {
                fontWeight: 500,
                color: 'rgba(255, 255, 255, 0.7)',
                "&:hover": {
                    color: '#fff',
                    cursor: 'pointer',
                },
            },
            webButton: {
                marginRight: '5px',
            },
            helpIcon: {

            }
        }
        return (
            <Box sx={headerStyles.wrapper}>
                <Box sx={headerStyles.topRow}>
                    <CommonButton
                        children={'Go to docs'}
                        variant={'default'}
                        sx={headerStyles.link}
                    />
                    <NotificationsBell
                        iconColor={'white'}
                        // badgeContent={2}
                    />
                    <Avatar src={'https://mui.com/static/images/avatar/1.jpg'}/>
                </Box>
                <Box sx={headerStyles.middleRow}>
                    <Typography
                        variant={'h1'}
                        children={title}
                        sx={headerStyles.link}
                    />
                    <Box>
                        <CommonButton
                            variant={'outlined'}
                            children={'Web setup'}
                            sx={headerStyles.webButton}
                        />
                        <Tooltip title={'Help'}>
                            <IconButton color={'white'} sx={headerStyles.helpIcon}>
                                <HelpIcon/>
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Box>
            </Box>
        )
            ;
    }
;

export default Header;