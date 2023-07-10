import { Toolbar, AppBar, styled } from '@mui/material';
import React from 'react';
import AcUnitIcon from '@mui/icons-material/AcUnit';

const Header = () => {
    return (
        <div>
            <Container position='static'>
                <Toolbar>
                    <AcUnitIcon fontSize='large' sx={{ color: '#E1F1F0' }} />
                </Toolbar>
            </Container>
        </div>
    )
}

const Container = styled(AppBar)`
    background: #060606;
    position: static;
    border-bottom: 1px solid #2f2f2f;
`;



export default Header;