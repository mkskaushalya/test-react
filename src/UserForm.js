import { Button, Grid, Typography } from "@mui/material";

const UserForm = (props) => {
    return (
        <Grid
            container
            spacing={2}
            sx={{ 
                backgroundColor: "#fff",
                marginBottom: "30px",
                display: "block"
            }}
        >
            <Grid item xs={12}>
                <Typography component={"h1"} sx={{ color: "#000" }}>User Form</Typography>
            </Grid>
            <Grid item xs={12} sm={6} sx={{display : "flex"}}>
                <Typography component={'label'} htmlFor="id" sx={{color :"#000" , marginRight : "20px", fontSize : "16px", width : "100px", display : "block"}}>ID</Typography>
                <input type="number" id="id" name="id" sx={{width : "400px"}} value={""} onChange={e => {}} />
            </Grid>
            <Grid item xs={12} sm={6} sx={{display : "flex"}}>
                <Typography component={'label'} htmlFor="name" sx={{color :"#000" , marginRight : "20px", fontSize : "16px", width : "100px", display : "block"}}>ID</Typography>
                <input type="text" id="name" name="name" sx={{width : "400px"}} value={""} onChange={e => {}} />
            </Grid>
            <Button variant="contained" sx={{backgroundColor : "#000", color : "#fff", margin : "auto", marginTop : "20px", marginLeft : "15px", "&:hover" : {opacity : "0.7", backgroundColor : "#000"}}}>Submit</Button>
        </Grid>
    );
}

export default UserForm;