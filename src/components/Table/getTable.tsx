import { AnyObject } from '@udecode/plate'

export const TableComponent = ({
    attributes,
    children,
    element,
    className,
  }: AnyObject) => {
    return (
      <span {...attributes} className={`${className} Tablesd`}>
        {children}
      </span>
    )
  }