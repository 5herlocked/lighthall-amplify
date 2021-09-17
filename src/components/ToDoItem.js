import React from "react";
import Card from '@mui/material/Card';
import {Box, IconButton, Stack, Typography} from "@mui/material";
import {Delete} from "@mui/icons-material";

const ToDoItem = (name, description) => {
    return (
        <div>
            <Card>
                <Box sx={{p: 2, display: 'flex'}}>
                    <Stack spacing={0.5}>
                        <Typography fontWeight={700}>{name}</Typography>
                        <Typography variant="body2">{description}</Typography>
                    </Stack>
                    <IconButton>
                        <Delete sx={{fontSize: 14}}/>
                    </IconButton>
                </Box>
            </Card>
        </div>
    )
}
export default ToDoItem;