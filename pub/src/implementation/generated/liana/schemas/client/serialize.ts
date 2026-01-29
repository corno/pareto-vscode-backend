
import * as _p from "pareto-core/dist/serializer"

import { 
    _p_unreachable_code_path, 
} from "pareto-core/dist/unreachable_code_path"

import { 
    _p_cc, 
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/client/serialize"

import * as v_serialize from "astn-core/dist/implementation/manual/schemas/sealed_target/serializers"

import * as v_marshall from "./marshall"
export const Position: t_signatures.Position = ($) => v_serialize.Document(
    v_marshall.Position(
        $
    )
)
export const Range: t_signatures.Range = ($) => v_serialize.Document(
    v_marshall.Range(
        $
    )
)
export const Format_Options: t_signatures.Format_Options = ($) => v_serialize.Document(
    v_marshall.Format_Options(
        $
    )
)
export const Replace: t_signatures.Replace = ($) => v_serialize.Document(
    v_marshall.Replace(
        $
    )
)
export const Text_Edit: t_signatures.Text_Edit = ($) => v_serialize.Document(
    v_marshall.Text_Edit(
        $
    )
)
export const Format_Result: t_signatures.Format_Result = ($) => v_serialize.Document(
    v_marshall.Format_Result(
        $
    )
)
export const Format_Error: t_signatures.Format_Error = ($) => v_serialize.Document(
    v_marshall.Format_Error(
        $
    )
)
export const Format_Parameters: t_signatures.Format_Parameters = ($) => v_serialize.Document(
    v_marshall.Format_Parameters(
        $
    )
)
export const Sort_Alphabetically_Parameters: t_signatures.Sort_Alphabetically_Parameters = ($) => v_serialize.Document(
    v_marshall.Sort_Alphabetically_Parameters(
        $
    )
)
