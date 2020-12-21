import React from 'react';
import Hidden from "@material-ui/core/Hidden";
import Box from "@material-ui/core/Box";

const MainContentLayout = ({children}) => {
    return (
        <>
            <Hidden smUp>
                <Box p={1}>
                    {children}
                </Box>
            </Hidden>
            <Hidden xsDown mdUp>
                <Box p={2}>
                    {children}
                </Box>
            </Hidden>
            <Hidden smDown lgUp>
                <Box p={2} px={4}>
                    {children}
                </Box>
            </Hidden>
            <Hidden mdDown>
                <Box p={2} px={10}>
                    {children}
                </Box>
            </Hidden>
        </>
    );
};

export default MainContentLayout;
