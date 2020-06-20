import styled, { keyframes } from 'styled-components'

const changeColor = keyframes`
  0% { filter: hue-rotate(0)}
  50% { filter: hue-rotate(360deg)}
`

const Faux = styled.div`
  margin-bottom: 1px;
  display: flex;
  background: #fff;
  opacity: 0.6;
  animation: ${changeColor} 5s infinite;

  > .num {
    width: 50px;
    padding: 10px 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background: #c6bfea;
  }

  > .text {
    width: calc(100% - 50px);
    min-height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    background: #f8f7ff;

    > .title {
      height: 25px;
      margin-bottom: 5px;
      background: #ccc5ef;
      transition: width 0.2s ease-in-out;

      @media (max-width: 600px) {
        width: calc(100% - 4px) !important;
      }
    }

    > .meta {
      display: flex;

      @media (max-width: 600px) {
        flex-wrap: wrap;
      }

      > span {
        width: 80px;
        height: 20px;
        margin: 0 5px 0 0;
        display: flex;
        align-items: center;
        background: #dad5f3;

        @media (max-width: 600px) {
          width: calc(50% - 4px);
          margin: 0 2px 2px 0;
        }
      }
    }
  }
`

const FauxBlock = () => {
  const RANDOM_WIDTH = Math.floor(Math.random() * (10 - 3)) + 3

  return (
    <Faux>
      <span className="num"></span>
      <div className="text">
        <p className="title" style={{ width: `${RANDOM_WIDTH}0%` }}></p>
        <div className="meta">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </Faux>
  )
}

export default FauxBlock
