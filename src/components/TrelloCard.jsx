import React from 'react'
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
const TrelloCard = ({text}) => {
  return (
    <div>
      <Card style={styles.cardContainer}>
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

const styles = {
  cardContainer: {
    marginBottom: 8
  }
}

export default TrelloCard