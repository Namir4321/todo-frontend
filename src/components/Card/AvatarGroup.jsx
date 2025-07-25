import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AvatarGroup = () => {
  return (
    <div className="w-1/2 flex flex-wrap items-center gap-1">
      <Avatar>
        <AvatarImage
          className="text-sm h-8 w-8"
          src="https://github.com/shadcn.png"
          alt="@shadcn"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage
          src="https://github.com/shadcn.png"
          className="text-sm h-8 w-8"
          alt="@shadcn"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex -space-x-2">
        <Avatar>
          <AvatarImage
            className="text-sm h-8 w-8"
            src="https://github.com/shadcn.png"
            alt="@shadcn"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            src="https://github.com/leerob.png"
            className="text-sm h-8 w-8"
            alt="@leerob"
          />
          <AvatarFallback>LR</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            className="text-sm h-8 w-8"
            src="https://github.com/evilrabbit.png"
            alt="@evilrabbit"
          />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}

export default AvatarGroup