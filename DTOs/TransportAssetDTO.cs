using Entities.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTOs
{
    public   class TransportAssetDTO
    {
        public Guid Id { get; set; }
        public string AssetName { get; set; }
        public string Manufacturer { get; set; }
        public string Model { get; set; }
        public string Year { get; set; }


        public string? DriverId { get; set; }
    }
}
