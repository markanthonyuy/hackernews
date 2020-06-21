import styled from 'styled-components'

const Links = styled.ul`
  padding: 0 10px;
  display: flex;
  list-style: none;
  justify-content: flex-end;

  > li {
    margin-left: 3px;
    padding: 10px;
    cursor: pointer;
    background: #f0eeff;
    user-select: none;

    &.disable {
      pointer-events: none;
    }

    &:hover {
      background: #624ed0;
      color: #f0eeff;
    }
  }
`

const Paging = ({ page, allData, handleNext, handlePrev, loading }) => (
  <Links>
    {page > 1 ? (
      <li onClick={handlePrev} className={loading ? 'disable' : ''}>
        Prev
      </li>
    ) : (
      <span />
    )}
    {page < allData.length / 30 ? (
      <li onClick={handleNext} className={loading ? 'disable' : ''}>
        Next
      </li>
    ) : (
      <span />
    )}
  </Links>
)

export default Paging
