import OneMail from "./Email"

function EmailsSection(props) {
    return (
        <main className="emails">
        <ul>
          {props.filteredEmails.map((email, index) => (
            <OneMail
            filteredEmails={props.filteredEmails}
            toggleRead={props.toggleRead}
            toggleStar={props.toggleStar}
            email={email}
            index={index}
          />
          ))}
        </ul>
      </main>
    )
}

export default EmailsSection


