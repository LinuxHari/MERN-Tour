import { Bookings, DataCell, StatusColor } from "../type";

type FormatValueProp = string | object | number;

type FormattedObject = {
    [key: string]: { type: DataCell; value: string | object; color?: StatusColor };
};

const statusColors: Record<string, StatusColor> = {
    Pending: 'yellow',
    Approved: 'purple',
    Confirmed: 'purple',
    Cancelled: 'red',
    Rejected: 'red'
};

const getFormattedValue = (data: FormatValueProp): { type: DataCell; value: string | object; color?: StatusColor } => {
    if (typeof data === "number") {
        return { type: "text", value: data.toString() };
    }

    if (typeof data === "string") {
        const color = statusColors[data];
        return { type: color ? "status" : "text", value: data, color };
    }

    return { type: "tour", value: data };
}

export const formatTableData = (dataToFormat: Bookings[]): FormattedObject[] => {
    return dataToFormat.map((data) => {
        const formattedObject: FormattedObject = {};
        Object.entries(data).forEach(([key, value]) => {
            formattedObject[key] = getFormattedValue(value);
        });
        return formattedObject;
    });
}
