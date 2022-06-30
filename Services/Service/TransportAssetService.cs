using AutoMapper;
using DTOs;
using Entities.Entities;
using Repositories.IGenericRepository;
using Services.IService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Service
{
    public class TransportAssetService : IGenericService<TransportAssetDTO>
    {
        private readonly IUnitOfWork<TransportAsset> _transportAsset;

        private IMapper _mapper;
        public TransportAssetService(IUnitOfWork<TransportAsset> transportAsset, IMapper mapper)
        {
            _transportAsset = transportAsset;
            _mapper = mapper;
        }
        public TransportAssetDTO Delete(object id)
        {
            return _mapper.Map<TransportAssetDTO>(_transportAsset.Entity.Delete(id));
        }

        public IEnumerable<TransportAssetDTO> GetALL()
        {
            var list = _transportAsset.Entity.GetALL();
            return _mapper.Map<IEnumerable<TransportAssetDTO>>(list);
        }

        public TransportAssetDTO GetById(object id)
        {
            return _mapper.Map<TransportAssetDTO>(_transportAsset.Entity.GetById(id));
        }

        public TransportAssetDTO Insert(TransportAssetDTO entity)
        {
            var newemp = _mapper.Map<TransportAsset>(entity);
            var newempDTO = _transportAsset.Entity.Insert(newemp);
            return _mapper.Map<TransportAssetDTO>(newempDTO);
        }

        public TransportAssetDTO Update(TransportAssetDTO entity)
        {
            var newemp = _mapper.Map<TransportAsset>(entity);
            var newempDTO = _transportAsset.Entity.Update(newemp);
            return _mapper.Map<TransportAssetDTO>(newempDTO);
        }
    }
    {
    }
}
