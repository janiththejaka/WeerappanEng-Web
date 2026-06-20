import Link from "next/link";

import {getMessagesAction,} from "@/actions/contact.actions";

export default async function MessagesPage() {

  const messages = await getMessagesAction();

  return (
    <div className="space-y-6">

      <h1
        className="
        text-3xl
        font-bold
        "
      >
        Messages
      </h1>

      <div
        className="
        overflow-x-auto
        border
        rounded-lg
        "
      >
        <table
          className="
          w-full
          "
        >
          <thead>
            <tr
              className="
              border-b
              "
            >
              <th className="p-3 text-left">
                Name
              </th>

              <th className="p-3 text-left">
                Email
              </th>

              <th className="p-3 text-left">
                WhatsApp
              </th>

              <th className="p-3 text-left">
                Status
              </th>

              <th className="p-3 text-left">
                Date
              </th>

              <th className="p-3 text-left">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {messages?.map(
              (message) => (
                <tr
                  key={message.id}
                  className="border-b"
                >
                  <td className="p-3">
                    {message.name}
                  </td>

                  <td className="p-3">
                    {message.email}
                  </td>

                  <td className="p-3">
                    {message.whatsapp}
                  </td>

                  <td className="p-3">
                    {message.status}
                  </td>

                  <td className="p-3">
                    {new Date(
                      message.created_at
                    ).toLocaleDateString()}
                  </td>

                  <td className="p-3">
                    <Link
                      href={`/admin/messages/${message.id}`}
                      className="
                      border
                      px-3
                      py-2
                      rounded-lg
                      "
                    >
                      View
                    </Link>
                  </td>
                </tr>
              )
            )}
          </tbody>

        </table>
      </div>

    </div>
  );
}