import { useState } from 'react'
import Modal from 'react-modal'
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

export function Header(){

    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal(){
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal(){
        setIsNewTransactionModalOpen(false);
    }

    return(
        <Container>
            <Content>
                <img src={logoImg} alt="dt momey" />
                <button type="button" onClick={handleOpenNewTransactionModal}>
                    Nova transação
                </button>

                <Modal 
                    isOpen={isNewTransactionModalOpen} 
                    onRequestClose={handleCloseNewTransactionModal}>
                    <h2>Cdastrar Transação</h2>
                </Modal>
            </Content>
        </Container>
    )
}