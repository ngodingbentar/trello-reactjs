import React from 'react'
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
const TrelloCard = ({text}) => {
  return (
    <div>
      <Card>
        {/* <EditButton
        onMouseDown={() => setIsEditing(true)}
        fontSize="small"
        >
        edit
        </EditButton> */}
        {/* <DeleteButton fontSize="small" onMouseDown={handleDeleteCard}>
        delete
        </DeleteButton> */}

        <CardContent>
        <Typography>{text}</Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default TrelloCard