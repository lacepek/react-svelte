import React from 'react';

export class SvelteComponent extends React.Component {
  constructor(props) {
    super();

    this.container = React.createRef();
    this.instance = null;
    this.div = React.createElement('div', {
      ref: this.container,
      id: props.id,
      className: props.className,
      children: props.children,
    });
  }

  componentDidMount() {
    const { this: Constructor, data } = this.props;

    this.instance = new Constructor({
      target: this.container.current,
      props: data,
    });
  }

  componentDidUpdate() {
    this.instance.$$set(this.props.data);
  }

  componentWillUnmount() {
    this.instance.$$destroy();
  }

  render() {
    return this.div;
  }
}
