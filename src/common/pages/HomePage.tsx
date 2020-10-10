import * as React from 'react';

import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from 'redux';

import MainLayout from "../layouts/MainLayout";

interface Props {
  test: string
}

const HomePage: React.FunctionComponent<Props> = ({ test }: Props) => {
  return (
    <MainLayout>
      <p className='title'>Home page</p>
      <p>{test}</p>
    </MainLayout>
  )
};

interface StateProps {
  weather: {
    test: string
  }
}

const mapStateToProps = ({ weather: { test } }: StateProps) =>  {
  return { test };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
