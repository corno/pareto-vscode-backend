import * as _pi from 'pareto-core-interface'

import * as d_on_completion from "./to_be_generated/on_completion"
import * as d_on_hover from "./to_be_generated/on_hover"
import * as d_validate_document from "./to_be_generated/validate_document"

export namespace queries {

    export type on_completion = _pi.Query<d_on_completion.Result, d_on_completion.Error, d_on_completion.Parameters>
    export type on_hover = _pi.Query<d_on_hover.Result, d_on_hover.Error, d_on_hover.Parameters>
    export type validate_document = _pi.Query<d_validate_document.Result, d_validate_document.Error, d_validate_document.Parameters>

}