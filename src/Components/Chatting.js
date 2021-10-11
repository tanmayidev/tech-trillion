import Chatbot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components';

{/*
    https://lucasbassetti.com.br/react-simple-chatbot/#/docs/chatbot
*/}

{/*
    Self made Icon code:
    const [botActive, setBotActive] = useState(false);
    const [buttonActive, setButtonActive] = useState('😞')
    { <button className="chatbotButton" onClick={() => {
                setBotActive(!botActive)
                setButtonActive(buttonActive == '😁' ? '😞' : '😁')
            }
            } >{buttonActive}</button>
            {
                botActive && }
*/}

const theme = {
    background: '#f5f8fb',
    headerBgColor: '#00b8ff',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#DFEAFB',
    botFontColor: '#000',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
};

// const config = {
//     height: "400px",
//     floating: true
// }

function Chatting() {
    return (
        <div className="Chatbot">

            <div className="chatbot">
                <ThemeProvider theme={theme}>
                    <Chatbot
                        floating = {true}
                        height = {"350px"}
                        width = {"250px"}
                        headerTitle = {"tech-helper-bot"}
                        floatingIcon={process.env.PUBLIC_URL + "/Images/chatbotIcon.svg"}
                        steps={[
                            {
                                id: 1,
                                message: 'Howdy! Learner',
                                trigger: 2
                            },
                        {
                            id: 2,
                            message: 'How may I be of service to you?',
                            end: true,
                        }]}
                        // {...config}
                    />
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Chatting;