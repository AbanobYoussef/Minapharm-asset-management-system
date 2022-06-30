using AutoMapper;
using Entities.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTOs.Command
{
    public  class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<DeviceAsset, DeviceAssetDTO>().ReverseMap();
            CreateMap<TransportAsset, TransportAssetDTO>().ReverseMap();
            CreateMap<Employee, EmployeeDTO>().ReverseMap();
        }
    }
}
