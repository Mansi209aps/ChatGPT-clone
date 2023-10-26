import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/user-icon.png'
import gptImgLogo from './assets/chatgptLogo.svg';

function App() {
  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop"><img src={gptLogo} alt="Logo" className="logo" /><span className="brand">ChatGPT</span></div>
          <button className="midBtn"><img src={addBtn} alt="new chat" className="addBtn" />New Chat</button>
          <div className="upperSideBottom">
            <button className="query"><img src={msgIcon} alt="Query" />What is Programming ?</button>
            <button className="query"><img src={msgIcon} alt="Query" />How to integrate an API ?</button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems"><img src={home} alt="Home" className="listItemsImg" />Home</div>
          <div className="listItems"><img src={saved} alt="Saved" className="listItemsImg" />Saved</div>
          <div className="listItems"><img src={rocket} alt="Upgrade" className="listItemsImg" />Upgrade to Pro</div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          <div className="chat">
            <img className="chatImg" src={userIcon} alt="" /><p className="txt">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam dolorem ipsa a dignissimos quas officia voluptatibus veniam repellat accusantium obcaecati.</p>
          </div>
          <div className="chat bot">
            <img className="chatImg" src={gptImgLogo} alt="" /><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quasi doloremque a dolor quibusdam ab, in harum aperiam porro, minus ducimus sapiente accusamus laudantium facere error ad exercitationem impedit molestias? Suscipit rerum ea iste ad cumque in quod, error nemo vero ullam perspiciatis aut repellat totam enim! Soluta est laborum nihil maiores temporibus non tempora nostrum. Ipsum corporis voluptatibus repudiandae nihil ducimus repellat quam explicabo consequuntur sunt voluptatem! Ea velit dignissimos et laboriosam, distinctio amet! Quam temporibus praesentium fugiat laboriosam inventore, repudiandae tempore voluptate molestiae doloribus? Esse natus nemo iusto, accusantium maiores, itaque facilis quod molestiae ea quis excepturi deserunt.</p>
          </div>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder='Send a message' /><button className="send"><img src={sendBtn} alt="Send" /></button>
          </div>
          <p>ChatGPT may produce inaccurate information about people, places, or facts. ChatGPT Sptember 20 Version.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
