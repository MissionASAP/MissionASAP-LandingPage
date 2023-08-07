/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type COCOLineTodoOverridesProps = {
    COCOLineTodo?: PrimitiveOverrideProps<ViewProps>;
    Vector442269?: PrimitiveOverrideProps<ViewProps>;
    Vector442270?: PrimitiveOverrideProps<IconProps>;
    Vector442271?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type COCOLineTodoProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: COCOLineTodoOverridesProps | undefined | null;
}>;
export default function COCOLineTodo(props: COCOLineTodoProps): React.ReactElement;
