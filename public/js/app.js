class TimerDashboard extends React.Component {
  render() {
    return (
      <div className="ui three column centered grid">
        <div className="column">
          <EditableTimerList />
          <ToggerableTimerFrom ispoen={true} />
        </div>
      </div>
    );
  }
}

class EditableTimerList extends React.Component {
  render() {
    return (
      <div id="Timer">
        <EditableTimer
          title={"Learn React"}
          elasped={3204932}
          project={"Web Domination"}
          runningSince={null}
          eidtFormOpen={false}
        />
         <EditableTimer
          title={"writing Poems"}
          elasped={0953584}
          project={"Academic Domination"}
          runningSince={null}
          eidtFormOpen={true}
        />
      </div>
    );
  }
}

class EditableTimer extends React.Component {
    render() {
      if (this.props.eidtFormOpen) {
        return (
          <TimerForm
          title={}
          project={}
          />
        );
      }
      else {
        return (
          <Timer
          title={this.props.title}
          project={this.props.project}
          elasped={this.props.elasped}
          runningSince={this.props.runningSince}
          />
        );
      }
    }
}

class TimerForm extends React.Component {
  render() {
    const submitText = this.propos.title ? "Update" : "Create";
    return(
      <div className="ui centered card">
        <div className="content">
          <div className="ui form">
            <div className="field">
              <label>Title</label>
              <input type="text" defaultValue={this.props.title} />
            </div>
            <div className="field">
              <label>Project</label>
              <input type="text" defaultValue={this.props.project} />
            </div>
            <div className="ui two bottom attached buttons">
              <button className="ui basic blue button">
                {submitText}
              </button>
              <button className="ui basic red button">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Timer extends React.Component {
  render() {
    return();
  }
}