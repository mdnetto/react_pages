var TextEditor = React.createClass({
	getInitialState: function() {
		return {value: 'Stary typing, yo! We will let you know when you get to 750 words'};
	},
	handleChange: function() {
		this.setState({value: this.refs.textarea.value});
	},
    rawMarkup: function() {
	    var md = new Remarkable();
    return { __html: md.render(this.state.value) };
	},
    render: function() {
		return (
			<div className="TextEditor">
				<h3>{this.state.date}</h3>
				<textarea onChange={this.handleChange} ref="textarea" defaultValue={this.state.value} />
				<h3>Word Count</h3>
				<div className="word_count" dangerouslySetInnerHTML={this.rawMarkup()} />
			</div>
		);
	}
});

ReactDOM.render(<TextEditor />, document.getElementById('content'));
