import React from "react";
import {Link} from "react-router-dom";
import {Card, Icon, Image} from 'semantic-ui-react';
import IconButton from "@material-ui/core/IconButton";
import {Clear} from "@material-ui/icons";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {connect} from "react-redux";
import {deleteReview} from "../store/reviews/reviewsActions";


const useStyles = makeStyles({
    deleteIcon: {
        borderTop: "1.5px solid #EDEDED",
    },
    iconContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    delete: {
        width: 42,
        height: 30,
        paddingBottom: 28,
        border: '1px solid #EDEDED',
        '&:hover': {
            width: 42,
            height: 30,
            paddingBottom: 28,
            border: '1px solid #EDEDED',
            color: 'red',
            background: 'white',
        },
    }
});


 function ReviewCard(props) {
    const classes = useStyles();
    const {id, resName, itemName, itemImgUrl, foodRating, price} = props;
    console.log(props)
    return (
        <Card key={id}>
            <Image src={itemImgUrl} wrapped ui={false}/>

            <Card.Content>
                <Card.Header>{resName}</Card.Header>
                <Card.Meta>{itemName}</Card.Meta>
                <Card.Description>
                    {`Price: $${price}`} <br/>
                    {`Rating: ${foodRating}`}
                </Card.Description>
            </Card.Content>

            <Card.Content extra>
                <div className={classes.iconContainer}>
                    <Link to={`/profile/review/${id}`}>
                        <Icon name='linkify'/>
                        More Info
                    </Link>
                    <IconButton className={classes.delete} onClick={() => props.deleteReview(id)}>
                        <Clear/>
                    </IconButton>
                </div>
            </Card.Content>
        </Card>
    )
}

export default connect(null ,{deleteReview})(ReviewCard);