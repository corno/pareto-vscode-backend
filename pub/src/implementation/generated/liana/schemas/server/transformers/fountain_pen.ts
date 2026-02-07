
import * as _p from 'pareto-core/dist/assign'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/server/serialize"

import * as v_serialize from "astn-core/dist/implementation/manual/schemas/sealed_target/transformers/fountain_pen"

import * as v_marshall from "./astn_sealed_target"

export const Diagnostic_Severity: t_signatures.Diagnostic_Severity = ($) => v_serialize.Document(
    v_marshall.Diagnostic_Severity(
        $,
    ),
)

export const Position: t_signatures.Position = ($) => v_serialize.Document(
    v_marshall.Position(
        $,
    ),
)

export const Range: t_signatures.Range = ($) => v_serialize.Document(
    v_marshall.Range(
        $,
    ),
)

export const Diagnostic: t_signatures.Diagnostic = ($) => v_serialize.Document(
    v_marshall.Diagnostic(
        $,
    ),
)

export const Diagnostics: t_signatures.Diagnostics = ($) => v_serialize.Document(
    v_marshall.Diagnostics(
        $,
    ),
)

export const Document_Data: t_signatures.Document_Data = ($) => v_serialize.Document(
    v_marshall.Document_Data(
        $,
    ),
)

export const Hover_Texts: t_signatures.Hover_Texts = ($) => v_serialize.Document(
    v_marshall.Hover_Texts(
        $,
    ),
)

export const Optional_Hover_Texts: t_signatures.Optional_Hover_Texts = ($) => v_serialize.Document(
    v_marshall.Optional_Hover_Texts(
        $,
    ),
)

export const On_Hover_Result: t_signatures.On_Hover_Result = ($) => v_serialize.Document(
    v_marshall.On_Hover_Result(
        $,
    ),
)

export const Completion_Items: t_signatures.Completion_Items = ($) => v_serialize.Document(
    v_marshall.Completion_Items(
        $,
    ),
)

export const Optional_Completion_Items: t_signatures.Optional_Completion_Items = ($) => v_serialize.Document(
    v_marshall.Optional_Completion_Items(
        $,
    ),
)

export const On_Completion_Result: t_signatures.On_Completion_Result = ($) => v_serialize.Document(
    v_marshall.On_Completion_Result(
        $,
    ),
)

export const On_Validate_Document_Result: t_signatures.On_Validate_Document_Result = ($) => v_serialize.Document(
    v_marshall.On_Validate_Document_Result(
        $,
    ),
)

export const Convert_To_JSON_Parameters: t_signatures.Convert_To_JSON_Parameters = ($) => v_serialize.Document(
    v_marshall.Convert_To_JSON_Parameters(
        $,
    ),
)

export const Seal_Parameters: t_signatures.Seal_Parameters = ($) => v_serialize.Document(
    v_marshall.Seal_Parameters(
        $,
    ),
)

export const On_Completion_Parameters: t_signatures.On_Completion_Parameters = ($) => v_serialize.Document(
    v_marshall.On_Completion_Parameters(
        $,
    ),
)

export const On_Hover_Parameters: t_signatures.On_Hover_Parameters = ($) => v_serialize.Document(
    v_marshall.On_Hover_Parameters(
        $,
    ),
)

export const Validate_Document_Parameters: t_signatures.Validate_Document_Parameters = ($) => v_serialize.Document(
    v_marshall.Validate_Document_Parameters(
        $,
    ),
)
