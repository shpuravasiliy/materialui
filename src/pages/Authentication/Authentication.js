import React from 'react';
import {Grid} from "@mui/material";
import CommonButton from "../../components/common/CommonButton/CommonButton";


const Authentication = () => {
    const buttonStyles = {
        fontWeight: 500,
        fontSize: '.875rem',
        textTransform: 'capitalize',
        borderRadius: 2.5,
        '& .MuiButton-contained': {
            backgroundColor: '#009be5',
        },
        '&:hover': {
            backgroundColor: 'transparent',
        }
    }
    return (
        <Grid
            item
            xs={8}
            styles={{backgroundColor: '#009be5'}}
        >
            <h1>This is authentication page.</h1>
            <CommonButton
                children={'Add user'}
                variant={'contained'}
                sx={buttonStyles}
            />
            <CommonButton
                children={'Web setup'}
                variant={'outlined'}
                sx={buttonStyles}
            />
            <CommonButton
                children={'Web setup'}
                variant={'contained'}
                color={'primary'}
            />
        </Grid>
    );
};

export default Authentication;