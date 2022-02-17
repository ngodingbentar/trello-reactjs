import React from 'react'
import TrelloActionButton from './TrelloActionButton'
import TrelloCard from './TrelloCard'
import {Droppable} from 'react-beautiful-dnd'

const TrelloList = ({listID,title, cards}) => {
  return (
    <Droppable droppableId={String(listID)}>
      {provided=>(
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          style={styles.container}
        >
          <h4>{title}</h4>
          {cards.map((card, index) => (
            <TrelloCard
              key={card.id}
              id={card.id}
              index={index}
              text={card.text}
            />
          ))}
          <TrelloActionButton listID={listID} />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  )
}

const styles = {
  container: {
    backgroundColor: "#dfe3e6",
    borderRadius: 3,
    width: 300,
    height: "100%",
    padding: 8,
    marginRight: 8,
  }
}

export default TrelloList