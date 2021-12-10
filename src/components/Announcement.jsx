import styled  from "styled-components"


const Container = styled.div`
    height: 50px;
    background-color: #ec8a66;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`

const Announcement = () => {
    return (
        <Container>
            Super Giam Gia! 
        </Container>
    )
}

export default Announcement
