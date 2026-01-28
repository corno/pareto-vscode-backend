
import * as _pi from "pareto-core/dist/interface"

import * as i_generic from "../../generic/deserialize"

import * as i_out from "./data"

export namespace Diagnostic_Severity_ {
    
    export type I = string
    
    export type O = i_out.Diagnostic_Severity
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Diagnostic_Severity_ = (
    context: Diagnostic_Severity_.I,
    abort: _pi.Abort<Diagnostic_Severity_.E>,
    parameters: {
        readonly 'document resource identifier': Diagnostic_Severity_.P.document_resource_identifier
        readonly 'indentation': Diagnostic_Severity_.P.indentation
    },
) => Diagnostic_Severity_.O

export namespace Position_ {
    
    export type I = string
    
    export type O = i_out.Position
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Position_ = (
    context: Position_.I,
    abort: _pi.Abort<Position_.E>,
    parameters: {
        readonly 'document resource identifier': Position_.P.document_resource_identifier
        readonly 'indentation': Position_.P.indentation
    },
) => Position_.O

export namespace Range_ {
    
    export type I = string
    
    export type O = i_out.Range
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Range_ = (
    context: Range_.I,
    abort: _pi.Abort<Range_.E>,
    parameters: {
        readonly 'document resource identifier': Range_.P.document_resource_identifier
        readonly 'indentation': Range_.P.indentation
    },
) => Range_.O

export namespace Diagnostic_ {
    
    export type I = string
    
    export type O = i_out.Diagnostic
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Diagnostic_ = (
    context: Diagnostic_.I,
    abort: _pi.Abort<Diagnostic_.E>,
    parameters: {
        readonly 'document resource identifier': Diagnostic_.P.document_resource_identifier
        readonly 'indentation': Diagnostic_.P.indentation
    },
) => Diagnostic_.O

export namespace Diagnostics_ {
    
    export type I = string
    
    export type O = i_out.Diagnostics
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Diagnostics_ = (
    context: Diagnostics_.I,
    abort: _pi.Abort<Diagnostics_.E>,
    parameters: {
        readonly 'document resource identifier': Diagnostics_.P.document_resource_identifier
        readonly 'indentation': Diagnostics_.P.indentation
    },
) => Diagnostics_.O

export namespace Document_Data_ {
    
    export type I = string
    
    export type O = i_out.Document_Data
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Document_Data_ = (
    context: Document_Data_.I,
    abort: _pi.Abort<Document_Data_.E>,
    parameters: {
        readonly 'document resource identifier': Document_Data_.P.document_resource_identifier
        readonly 'indentation': Document_Data_.P.indentation
    },
) => Document_Data_.O

export namespace Hover_Texts_ {
    
    export type I = string
    
    export type O = i_out.Hover_Texts
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Hover_Texts_ = (
    context: Hover_Texts_.I,
    abort: _pi.Abort<Hover_Texts_.E>,
    parameters: {
        readonly 'document resource identifier': Hover_Texts_.P.document_resource_identifier
        readonly 'indentation': Hover_Texts_.P.indentation
    },
) => Hover_Texts_.O

export namespace Optional_Hover_Texts_ {
    
    export type I = string
    
    export type O = i_out.Optional_Hover_Texts
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Optional_Hover_Texts_ = (
    context: Optional_Hover_Texts_.I,
    abort: _pi.Abort<Optional_Hover_Texts_.E>,
    parameters: {
        readonly 'document resource identifier': Optional_Hover_Texts_.P.document_resource_identifier
        readonly 'indentation': Optional_Hover_Texts_.P.indentation
    },
) => Optional_Hover_Texts_.O

export namespace On_Hover_Result_ {
    
    export type I = string
    
    export type O = i_out.On_Hover_Result
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type On_Hover_Result_ = (
    context: On_Hover_Result_.I,
    abort: _pi.Abort<On_Hover_Result_.E>,
    parameters: {
        readonly 'document resource identifier': On_Hover_Result_.P.document_resource_identifier
        readonly 'indentation': On_Hover_Result_.P.indentation
    },
) => On_Hover_Result_.O

export namespace Completion_Items_ {
    
    export type I = string
    
    export type O = i_out.Completion_Items
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Completion_Items_ = (
    context: Completion_Items_.I,
    abort: _pi.Abort<Completion_Items_.E>,
    parameters: {
        readonly 'document resource identifier': Completion_Items_.P.document_resource_identifier
        readonly 'indentation': Completion_Items_.P.indentation
    },
) => Completion_Items_.O

export namespace Optional_Completion_Items_ {
    
    export type I = string
    
    export type O = i_out.Optional_Completion_Items
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Optional_Completion_Items_ = (
    context: Optional_Completion_Items_.I,
    abort: _pi.Abort<Optional_Completion_Items_.E>,
    parameters: {
        readonly 'document resource identifier': Optional_Completion_Items_.P.document_resource_identifier
        readonly 'indentation': Optional_Completion_Items_.P.indentation
    },
) => Optional_Completion_Items_.O

export namespace On_Completion_Result_ {
    
    export type I = string
    
    export type O = i_out.On_Completion_Result
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type On_Completion_Result_ = (
    context: On_Completion_Result_.I,
    abort: _pi.Abort<On_Completion_Result_.E>,
    parameters: {
        readonly 'document resource identifier': On_Completion_Result_.P.document_resource_identifier
        readonly 'indentation': On_Completion_Result_.P.indentation
    },
) => On_Completion_Result_.O

export namespace On_Validate_Document_Result_ {
    
    export type I = string
    
    export type O = i_out.On_Validate_Document_Result
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type On_Validate_Document_Result_ = (
    context: On_Validate_Document_Result_.I,
    abort: _pi.Abort<On_Validate_Document_Result_.E>,
    parameters: {
        readonly 'document resource identifier': On_Validate_Document_Result_.P.document_resource_identifier
        readonly 'indentation': On_Validate_Document_Result_.P.indentation
    },
) => On_Validate_Document_Result_.O

export namespace Convert_To_JSON_Parameters_ {
    
    export type I = string
    
    export type O = i_out.Convert_To_JSON_Parameters
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Convert_To_JSON_Parameters_ = (
    context: Convert_To_JSON_Parameters_.I,
    abort: _pi.Abort<Convert_To_JSON_Parameters_.E>,
    parameters: {
        readonly 'document resource identifier': Convert_To_JSON_Parameters_.P.document_resource_identifier
        readonly 'indentation': Convert_To_JSON_Parameters_.P.indentation
    },
) => Convert_To_JSON_Parameters_.O

export namespace Seal_Parameters_ {
    
    export type I = string
    
    export type O = i_out.Seal_Parameters
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Seal_Parameters_ = (
    context: Seal_Parameters_.I,
    abort: _pi.Abort<Seal_Parameters_.E>,
    parameters: {
        readonly 'document resource identifier': Seal_Parameters_.P.document_resource_identifier
        readonly 'indentation': Seal_Parameters_.P.indentation
    },
) => Seal_Parameters_.O

export namespace On_Completion_Parameters_ {
    
    export type I = string
    
    export type O = i_out.On_Completion_Parameters
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type On_Completion_Parameters_ = (
    context: On_Completion_Parameters_.I,
    abort: _pi.Abort<On_Completion_Parameters_.E>,
    parameters: {
        readonly 'document resource identifier': On_Completion_Parameters_.P.document_resource_identifier
        readonly 'indentation': On_Completion_Parameters_.P.indentation
    },
) => On_Completion_Parameters_.O

export namespace On_Hover_Parameters_ {
    
    export type I = string
    
    export type O = i_out.On_Hover_Parameters
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type On_Hover_Parameters_ = (
    context: On_Hover_Parameters_.I,
    abort: _pi.Abort<On_Hover_Parameters_.E>,
    parameters: {
        readonly 'document resource identifier': On_Hover_Parameters_.P.document_resource_identifier
        readonly 'indentation': On_Hover_Parameters_.P.indentation
    },
) => On_Hover_Parameters_.O

export namespace Validate_Document_Parameters_ {
    
    export type I = string
    
    export type O = i_out.Validate_Document_Parameters
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Validate_Document_Parameters_ = (
    context: Validate_Document_Parameters_.I,
    abort: _pi.Abort<Validate_Document_Parameters_.E>,
    parameters: {
        readonly 'document resource identifier': Validate_Document_Parameters_.P.document_resource_identifier
        readonly 'indentation': Validate_Document_Parameters_.P.indentation
    },
) => Validate_Document_Parameters_.O

export { 
    Diagnostic_Severity_ as Diagnostic_Severity, 
    Position_ as Position, 
    Range_ as Range, 
    Diagnostic_ as Diagnostic, 
    Diagnostics_ as Diagnostics, 
    Document_Data_ as Document_Data, 
    Hover_Texts_ as Hover_Texts, 
    Optional_Hover_Texts_ as Optional_Hover_Texts, 
    On_Hover_Result_ as On_Hover_Result, 
    Completion_Items_ as Completion_Items, 
    Optional_Completion_Items_ as Optional_Completion_Items, 
    On_Completion_Result_ as On_Completion_Result, 
    On_Validate_Document_Result_ as On_Validate_Document_Result, 
    Convert_To_JSON_Parameters_ as Convert_To_JSON_Parameters, 
    Seal_Parameters_ as Seal_Parameters, 
    On_Completion_Parameters_ as On_Completion_Parameters, 
    On_Hover_Parameters_ as On_Hover_Parameters, 
    Validate_Document_Parameters_ as Validate_Document_Parameters, 
}
