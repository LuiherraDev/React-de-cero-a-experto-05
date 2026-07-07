import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "../ui/breadcrumb"

interface Breadcrumb {
  label: string;
  to: string;
}

interface Props {
  currentPage: string;
  breadcrumbs?: Breadcrumb[];
}



export const CustomBreadcrumbs = ({ currentPage, breadcrumbs = [] }: Props) => {

  return (
    <Breadcrumb className="my-5">
      <BreadcrumbList>

        <BreadcrumbItem>
          <BreadcrumbLink href='/'>Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />

        {
          breadcrumbs.map(crumb => (
            <div className="flex items-center">
              <BreadcrumbItem>
                <BreadcrumbLink href={crumb.to}>{crumb.label}</BreadcrumbLink>
                <BreadcrumbSeparator />
              </BreadcrumbItem>
            </div>
          ))
        }

        <BreadcrumbItem>
          <BreadcrumbPage>{currentPage}</BreadcrumbPage>
        </BreadcrumbItem>

      </BreadcrumbList>
    </Breadcrumb>
  )
}
