import styled from 'styled-components'

const FooterBody = styled.footer`
  padding: 10px;
  text-align: center;

  > p {
    margin-top: 5px;
    font-size: 12px;
  }

  > span {
    margin: 0 5px;
    display: inline-block;
  }
`

const Footer = () => (
  <FooterBody>
    <span>Hacker News by created by</span>
    <a href="http://markanthonyuy.com" rel="noopener">
      Mark Anthony Uy
    </a>
    <span>API by</span>
    <a href="https://hacker-news.firebaseio.com/" rel="noopener">
      Hacker News
    </a>
    <p>* Data is limited by what Hacker News API allows</p>
  </FooterBody>
)

export default Footer
