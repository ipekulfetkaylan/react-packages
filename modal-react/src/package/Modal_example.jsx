import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');
// nerede açılmasını istiyorsan orayı yazmalısın ki orada açılsın bu çok önemli garanti olması için root elementine yazık

// eğer bir css özelliği vermek isteniyorsa bu şekilde bir değişklende özellikleri tutup o değişkeni yazdırabiliriz
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  

function Modal_example() {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

      function openModal() {
        setIsOpen(true);
      }
      function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = 'green';
      }
    
      function closeModal() {
        setIsOpen(false);
      }

  return (
    <div>
             <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={customStyles}

      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>Merhaba</div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, odit optio? Qui, necessitatibus sapiente consequatur fugiat omnis blanditiis repellat praesentium in quo reiciendis eaque architecto officiis harum laborum facilis adipisci, sed voluptatum, non vel id odio odit? Alias facilis accusantium excepturi expedita nesciunt hic incidunt nisi maiores consectetur eius voluptatem nostrum, quisquam itaque repellat exercitationem. Dolores fuga laudantium sed officia enim accusamus, possimus ut ipsum beatae iusto doloremque consectetur dolorem excepturi tempore facere, voluptates dignissimos molestias totam libero reprehenderit. Doloremque aspernatur eveniet quae ipsam rerum, culpa deserunt, voluptatum explicabo excepturi dolores rem id, corrupti optio obcaecati mollitia porro consectetur placeat?</p>
        
      </Modal>
      
    </div>
  )
}

export default Modal_example

