import * as React from "react";
import styled from "@emotion/styled";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { DataCardProps } from "@src/commons/typescripts";

function DataCard(props: DataCardProps) {
    const { title, description, value } = props;
    return (
        <StyledPaper>
            <StyledBox>
                <Typography variant="h6" color={"lightslategrey"}>
                    {title}
                </Typography>
                <Tooltip title={<StyledTypography>{description}</StyledTypography>}>
                    <IconButton>
                        <InfoOutlinedIcon />
                    </IconButton>
                </Tooltip>
            </StyledBox>
            <Typography variant="h4">{value}</Typography>
        </StyledPaper>
    );
}

const StyledPaper = styled(Paper)`
    position: relative;
    top: 1rem;
    height: 100%;
    width: calc(100% - 0.1rem);
    padding: 0.5rem 0.25rem;
`;

const StyledBox = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    &h4,
    h6 {
        padding: 0.25rem;
    }
`;

const StyledTypography = styled(Typography)`
    font-size: 1rem;
`;

export default DataCard;
