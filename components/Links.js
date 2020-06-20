import styled from 'styled-components'

const LinksBody = styled.ul`
  margin: 10px 0;
  padding: 0 5px;
  display: flex;
  list-style: none;
  justify-content: flex-start;

  > li {
    > a {
      display: inline-block;
      padding: 10px;
      cursor: pointer;
      user-select: none;
      font-size: 18px;

      &.active {
        pointer-events: none;
        text-decoration: none;
        font-weight: 600;
      }
    }
  }
`

const Links = ({ active }) => (
  <LinksBody>
    <li>
      <a href="/" className={active === 'top' ? 'active' : ''}>
        Top
      </a>
    </li>
    <li>
      <a href="/new" className={active === 'new' ? 'active' : ''}>
        New
      </a>
    </li>
    <li>
      <a href="/ask" className={active === 'ask' ? 'active' : ''}>
        Ask
      </a>
    </li>
    <li>
      <a href="/show" className={active === 'show' ? 'active' : ''}>
        Show
      </a>
    </li>
    <li>
      <a href="jobs" className={active === 'jobs' ? 'active' : ''}>
        Jobs
      </a>
    </li>
  </LinksBody>
)

export default Links
