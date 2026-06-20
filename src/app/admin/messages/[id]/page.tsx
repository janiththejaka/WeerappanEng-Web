import {getMessageByIdAction,} from "@/actions/contact.actions";
import MessageStatusButtons from "@/components/admin/messages/MessageStatusButtons";


export default async function MessageDetailsPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {

  const { id } = await params;

  const message = await getMessageByIdAction(id);

  return (
    <div
      className="
      max-w-3xl
      space-y-6
      "
    >
      <h1
        className="
        text-3xl
        font-bold
        "
      >
        Message Details
      </h1>

      <div className="border p-6 rounded-lg">

        <p>
          <strong>Name:</strong>{" "}
          {message.name}
        </p>

        <p>
          <strong>Email:</strong>{" "}
          {message.email}
        </p>

        <p>
          <strong>WhatsApp:</strong>{" "}
          {message.whatsapp}
        </p>

        <p>
          <strong>Subject:</strong>{" "}
          {message.subject}
        </p>

        <p>
          <strong>Status:</strong>{" "}
          {message.status}
        </p>

        <div className="mt-6">
          <strong>Message:</strong>

          <p className="mt-2">
            {message.message}
          </p>
        </div>

      </div>

      <MessageStatusButtons
        id={message.id}
      />

    </div>
  );
}