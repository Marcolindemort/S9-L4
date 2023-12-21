import { Component } from "react";

class CommentArea extends Component {

    state = {

    }

    fetchComments = async (elementId) => {
        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + elementId, {
                headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxZDgwNzBkOGEyMDAwMThhNDhhNjIiLCJpYXQiOjE3MDMxNzAxNjMsImV4cCI6MTcwNDM3OTc2M30.mg_gZCi7KgZO3D175NK_UptqEcqMFcHMdh3pEZgKqrg"
                }
                })

        }
    }

    render () {
        return (

        )
}};

export default CommentArea