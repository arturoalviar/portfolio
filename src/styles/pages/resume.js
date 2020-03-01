import styled from 'styled-components'

const ResumeWrapper = styled.div`
  position: relative;
  margin-top: ${props => props.theme.mixins.remCalc(100)};
  ${props => props.theme.minMedia.md`
    margin-top: ${props.theme.mixins.remCalc(50)};
  `}
`

const ResumeHeader = styled.header`
  display: grid;
  align-items: flex-start;
  grid-template-columns: 1fr 120px;
  grid-gap: ${props => props.theme.gutter.grid};
  margin-bottom: ${props => props.theme.mixins.remCalc(20)};
  h1 {
    font-weight: 900;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: right;
    li {
      font-size: ${props => props.theme.mixins.remCalc(12)};
      font-weight: 600;
      line-height: 2;
      margin: 0;
      padding: 0;
    }
  }
  ${props => props.theme.minMedia.md`
    margin-bottom: ${props.theme.mixins.remCalc(60)};
    li {
      line-height: 1.5;
    }
  `}
`

const ResumeGrid = styled.div`
  ${props => props.theme.minMedia.md`
    display: grid;
    grid-template-columns: 1fr 250px;
    grid-gap: ${props.theme.gutter.grid};
  `}
`

const ResumeBlock = styled.div`
  h3 {
    font-size: ${props => props.theme.mixins.remCalc(24)};
    font-weight: 700;
    margin-bottom: ${props => props.theme.mixins.remCalc(10)};
    ${props => props.theme.minMedia.md`
      font-size: ${props => props.theme.mixins.remCalc(28)};
    `}
  }

  h5 {
    font-weight: 400;
    margin-bottom: 0.35rem;
    position: relative;
  }

  ul {
    list-style-position: outside;
    padding: 0 20px;
    li {
      line-height: 1.6;
    }
  }

  .resume-item-project {
    h5 {
      font-weight: bold;
    }
    ${props => props.theme.minMedia.md`
      p {
        font-size: ${props.theme.mixins.remCalc(14)};
      }
    `}
  }

  .resume-item-subheading {
    color: ${props => props.theme.colors.gray};
    font-size: ${props => props.theme.mixins.remCalc(12)};
    font-weight: 600;
    margin-bottom: ${props => props.theme.mixins.remCalc(14)};
  }
`

const ResumeSkill = styled.span`
  background: ${props => props.theme.colors.lightGray};
  font-size: ${props => props.theme.mixins.remCalc(12)};
  font-weight: bold;
  display: inline-flex;
  margin-left: -5px;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 5px 10px;
`

export { ResumeWrapper, ResumeGrid, ResumeHeader, ResumeBlock, ResumeSkill }
