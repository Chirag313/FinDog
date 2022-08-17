import React from 'react'
import ReactDOM from 'react-dom/client';
import Card from "./shop"
import Dog from "./Dog_Images/Labrador_Thumbnail.jpg"
function App() {
  return (
    <div className='app'>
      <Card 
      img= {Dog}
      title="Labrador Retriever"
      description="The sweet-faced, lovable Labrador Retriever is America's most popular dog breed. Labs are friendly, outgoing, and high-spirited companions who have more than enough affection to go around for a family looking for a medium-to-large dog. The sturdy, well-balanced Labrador Retriever can, depending on the sex, stand from 21.5 to 24.5 inches at the shoulder and weigh between 55 to 80 pounds. The dense, hard coat comes in yellow, black, and a luscious chocolate."
      button_link="#"
      />
    </div>
  )
}

export default App
