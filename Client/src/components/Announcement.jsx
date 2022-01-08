import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    display: flex;
    background-color: teal;
    color: white;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`

const Announcement = () => {
    return (
        <div>
            <Container>
                Super Deal ! Free shipping on Order over than $50
            </Container>
        </div>
    )
}

export default Announcement
