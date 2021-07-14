import styled from 'styled-components';

export const Container = styled.button`
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: normal;
  touch-action: manipulation;
  cursor: pointer;
  border: 1px solid transparent;
  text-decoration: none;

  //.btn-block
  display: block;
  width: 100%;

  //.bnt-social
  position: relative;
  padding-left: 44px;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  //.bnt-google
  color: #fff;
  background-color: #dd4b39;
  border-color: rgba(0,0,0,0.2);

  span {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 32px;
    line-height: 34px;
    font-size: 1.6em;
    text-align: center;
    border-right: 1px solid rgba(0,0,0,0.2);
  }
`

