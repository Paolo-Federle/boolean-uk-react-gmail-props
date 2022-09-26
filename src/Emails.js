import OneMail from "./Email"

function EmailsSection(props) {
    return (
        <main className="emails">
        <ul>
          {props.filteredEmails.map((email, index) => (
            <OneMail key={index}
            toggleRead={props.toggleRead}
            toggleStar={props.toggleStar}
            email={email}
          />
          ))}
        </ul>
      </main>
    )
}

export default EmailsSection


