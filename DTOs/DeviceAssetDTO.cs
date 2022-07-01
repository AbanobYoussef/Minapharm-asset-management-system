using Entities.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTOs
{
    public  class DeviceAssetDTO
    {
        public Guid Id { get; set; }
        public string AssetName { get; set; }
        public string Manufacturer { get; set; }
        public string Model { get; set; }
        public string Version { get; set; }
        public string Processor { get; set; }
        public string InstallesMomory { get; set; }


        public string EmployeeId { get; set; }
        public virtual Employee Employee { get; set; }
    }
}
