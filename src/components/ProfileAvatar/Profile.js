import React from 'react';
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';


function Profile({ isAuthenticated }) {
    const { user } = useAuth0();
    const items = useSelector((state) => state.cart);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(false);
    };

    return (
        <div>
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} className='p-0'>
                        <Avatar alt="Remy Sharp" src={user.picture} sx={{ width: 24, height: 24 }} />
                    </IconButton>
                </Tooltip>
                <Menu
                    className='mt-[45px]'
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                >
                    <div className='flex flex-col items-start justify-start px-5'>
                        <button className='mb-2'>Profile</button>
                        <hr />
                        <Link to="/wishlist">
                            <button className='mb-2'>Wishlist</button>
                        </Link>
                        <hr />
                        <button className='mb-2'>Account</button>
                        <hr />
                        <button className='mb-2'>Dashboard</button>
                        <hr />

                        {/* SHOW CART BUTTON ONLY IF USER IS AUTHENTICATED */}
                        {isAuthenticated && (
                            <Link to="/cart" className=' block sm:hidden'>
                                <Badge badgeContent={items.length} color="primary">
                                    <button className='mb-2'>Cart</button>
                                </Badge>
                            </Link>
                        )}
                    </div>
                </Menu>
            </Box>
        </div>
    )
}

export default Profile;
