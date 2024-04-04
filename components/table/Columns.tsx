"use client";

import { FileType } from "@/typing";
import { ColumnDef } from "@tanstack/react-table";
import { FileIcon, defaultStyles } from "react-file-icon";
import prettyBytes from "pretty-bytes";
import { COLOR_EXTENSION_MAP } from "@/constant";
import { AiOutlineCloudDownload } from "react-icons/ai";

export const columns: ColumnDef<FileType>[] = [
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ renderValue, ...props }) => {
      const type = renderValue() as string;
      let extension: string;

      if (type === "video/quicktime") {
        extension = "mov";
      } else if (
        type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ) {
        extension = "docx";
      } else if (
        type ===
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      ) {
        extension = "xlsx";
      } else {
        extension = type.split("/")[1];
      }

      // console.log(type, "<<<<< typeeeenyaa");
      // console.log(extension, "<<<<< extensionnya");

      return (
        <div className="w-10">
          <FileIcon
            extension={extension}
            labelColor={COLOR_EXTENSION_MAP[extension]}
            //@ts-ignore
            {...defaultStyles[extension]}
          />
        </div>
      );
    },
  },

  {
    accessorKey: "fileName",
    header: "File Name",
  },
  {
    accessorKey: "timestamp",
    header: "Date Added",
  },
  {
    accessorKey: "size",
    header: "Size",
    cell: ({ renderValue, ...props }) => {
      return <span>{prettyBytes(renderValue() as number)}</span>;
    },
  },
  {
    accessorKey: "downloadURL",
    header: "Link",
    cell: ({ renderValue, ...props }) => {
      return (
        <a
          href={renderValue() as string}
          target="blank"
          className="hover:text-blue-600"
        >
          <AiOutlineCloudDownload size={29} className="inline-block mr-1" />
        </a>
      );
    },
  },
];
